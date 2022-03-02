import { Router } from 'express'
import { getProfiles, addProfile } from '../controller/profile.controller.js'

const profileRouter = new Router();

profileRouter.route('/')
    .get(getProfiles)
    .post(addProfile);


export default profileRouter;