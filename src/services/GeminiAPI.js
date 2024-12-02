import axios from "axios";

const BASE_URL = "https://api.gemini.com"; // Replace with Gemini's actual URL

const GeminiAPI = {
  getBoundingBox: async (query) => {
    try {
      const payload = {
        request: "/bounding-box", // Replace with the correct endpoint
        query,
      };
      const response = await axios.post(`${BASE_URL}/v1/coordinates`, payload, {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`, // Replace with actual API key
        },
      });
      return response.data; // Expect an array of bounding boxes
    } catch (error) {
      console.error("Error fetching bounding box coordinates:", error);
      return [];
    }
  },
};

export default GeminiAPI;