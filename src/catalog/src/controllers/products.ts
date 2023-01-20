import { Request, Response, Router } from "express";
// import collection from "../database";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send(["product1", "product2"]).json().status(200).end();
});

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.send([`product${id}`]).json().status(200).end();
});

router.put("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.send({id}).json().status(200).end();
});

export default router;