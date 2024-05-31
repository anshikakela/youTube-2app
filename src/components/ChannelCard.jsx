import { Box, Typography, CardMedia, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constant'

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', overflow: 'hidden', height: '300px', width: '300px'}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 
                textAlign: 'center', color: '#fff'}}>
                <CardMedia image={ channelDetail.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                    alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '240px', width: '240px' }} />
                <Typography variant='h6'>
                    {channelDetail.snippet?.title}
                </Typography>
            </CardContent>    
        </Link>
    </Box>
  )
}

export default ChannelCard
