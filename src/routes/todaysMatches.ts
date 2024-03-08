import {Router} from "express";
const router = Router();

// Get Today's Matches
router.get('/', async (_ , res) => {
  try {
    const apiResponse = await fetch(`https://api.sportradar.com/nba/trial/v8/en/games/2024/03/08/schedule.json?api_key=${process.env.SPORTRADAR_API_KEY}`);
    const todaysMatches = await apiResponse.json();
    res.status(200).json(todaysMatches);
  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while fetching today\'s matches' }); 
  }
});


export default router;