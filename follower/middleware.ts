import type { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import FollowerCollection from "./collection";

/**
 * Check that user is a follower
 */
const isFollower = async (req: Request, res: Response, next: NextFunction) => {
  const follower = await FollowerCollection.findOneByUsername(
    req.session.userId,
    req.params.username
  );
  if (!follower) {
    res.status(400).json({
      error: {
        alreadyFollower: `You need to be a follower of ${req.params.username}.`,
      },
    });
    return;
  }

  next();
};

/**
 * Check that user is not a follower
 */
const isNotFollower = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const follower = await FollowerCollection.findOneByUsername(
    req.session.userId,
    req.params.username
  );
  if (follower) {
    res.status(400).json({
      error: {
        alreadyFollower: `You are already a follower of ${req.params.username}.`,
      },
    });
    return;
  }

  next();
};

export { isFollower, isNotFollower };
