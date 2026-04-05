// This is a utility function that wraps asynchronous request handlers in an Express.js application. It allows you to handle errors in a centralized way without having to use try-catch blocks in every route handler.

const asyncHandler = (requestHandler) => {
    (req , res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
    }
}
 





export {asyncHandler};

// Usage example: through try and catch block

// const asyncHandler = (fn) => async(req, res , next)=>{

//     try{

//         await fn(req, res, next);

//     }catch(error){
//         res.status (error.code || 500).json({
//             success : false,
//             message : error.message || "Internal Server Error"
//         })
//     }

// }