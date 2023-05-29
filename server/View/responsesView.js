import Response from '../Models/responsesModel.js';

const responseService = {
  getAllResponse,
  deleteResponse,
  createResponse,
};

async function getAllResponse(page, size) {
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(size) || 10;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Response.find().skip(skipCount).limit(pageSize);
}

async function deleteResponse(responseId) {
  return await Response.findByIdAndDelete(responseId);
}

async function createResponse(userId, body) {
  const newResponse = new Response({ ...body, userId });

  return await newResponse.save();
}

export default responseService;
