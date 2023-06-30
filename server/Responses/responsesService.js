import Response from './responsesModel.js';

const responseService = {
  getAllResponse,
  deleteResponse,
  createResponse,
};

// create response
async function createResponse(userId, description) {
  const newResponse = new Response({ description, userId });
  const res=await newResponse.save();
  return res;
}

//get responses
async function getAllResponse(page, size) {
  // create pagination instead get all responses
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Response.find().skip(skipCount).limit(pageSize);
}

// delete response
async function deleteResponse(responseId) {
  return await Response.findByIdAndDelete(responseId);
}



export default responseService;
