import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constant"

const VideoCard = ({ 
    video: { 
        id: videoId, 
        snippet 
    }}) => 
    { return (
      <Card sx={{width: { md: '300px', xs: '100%' }, boxShadow: "none", borderRadius: '0px'}}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            sx={{ width: "100%", height: 180 }}/>
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '80px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
            <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
            </Typography>
        </Link>
        </CardContent>
    </Card>
    )
}

export default VideoCard
