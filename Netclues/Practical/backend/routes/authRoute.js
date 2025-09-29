import e from "express";
const router = e.Router();

router.route('/')
    .get()
    .post()
    .put()
    .patch()
    .delete()

export default router;