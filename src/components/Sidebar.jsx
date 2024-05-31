import { Stack } from "@mui/material"
import { categories } from '../utils/constant'

const Sidebar = ({ seletedCategory, setSelectedCategory }) => {

  return (
    <Stack direction="row" sx={{ overflow: "auto", height: { sx: "auto", md: "95%"}, 
    flexDirection: { sx: "row", md: "column"} }}>
        { categories.map((category) => (
            <button className="category-btn" onClick={() => setSelectedCategory(category.name)} 
                style={{ backgroundColor: category.name === seletedCategory && '#FC1503', color: 'white'}} key={category.name}>
                <span style={{ color: category.name === seletedCategory ? 'white' : '#FC1503', marginRight: '10px' }}>
                    {category.icon}</span>
                <span style={{ opacity: category.name === seletedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        )) }
    </Stack>
  )
}

export default Sidebar
