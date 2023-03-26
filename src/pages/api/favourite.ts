import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "../../lib/prismadb";
import serverAuth from "../../lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);

      const { gqlId, queryItem } = req.body;

      const existingCard = await prismadb.gqlQueryCard.findFirst({
        where: {
          gqlId: gqlId,
        },
      });

      console.log({ existingCard });

      if (!existingCard) {
        const newCard = await prismadb.gqlQueryCard.create({
          data: {
            gqlId: gqlId,
            queryItem: queryItem,
          },
        });

        console.log({ newCard });
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          savedCard: {
            create: {
              gqlId: gqlId,
              queryItem: queryItem,
            },
          },
        },
      });
      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);

      const { gqlId } = req.body;

      const existingCard = await prismadb.gqlQueryCard.findFirst({
        where: {
          gqlId: gqlId,
        },
      });

      if (!existingCard) {
        throw new Error("Invalid ID");
      }

      const updatedSavedCard = without(currentUser.savedCard.gqlId, gqlId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          savedCard: updatedSavedCard,
        },
      });

      return res.status(200).json(updatedUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
