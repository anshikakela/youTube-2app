import { useState, useEffect } from "react"
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {
  const [seletedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${seletedCategory}`)
    .then((data) => setVideos(data.items))

  }, [seletedCategory]);

  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: { sx: 0, md: "1px solid #3d3d3d"}, px: { sm: 0, md: 2}  }}>
        <Sidebar seletedCategory={seletedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography className="copyright" sx={{ mt: 1.5 }}> Copyright @2024 YT</Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          <span>{seletedCategory}</span>
          <span style={{ color: '#FC1503', marginLeft: '10px'}}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed
