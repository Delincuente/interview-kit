export default function (error, req, res, next) {
    console.log(error.stack);

    res.status(error.statusCode || 500).json({
        success: false,
        message: (error.statusCode) ? error.message : "Something went wrong."
    });
}


export function notFound(req, res, next) {
    const error = new Error(`Not found - ${req.url}`);
    error.statusCode = 404;
    next(error);
}