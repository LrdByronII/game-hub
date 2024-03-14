import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const Like = () => {
    const [like, setLike] = useState(false);
    const toggle = () => {
        setLike(!like);
    }

    if (like) return (<Box>
        <AiFillHeart color="#ff6b81" size={35} onClick={toggle} />
    </Box>)
    return (<Box>
        <AiOutlineHeart size={35} onClick={toggle} />
    </Box>)
}

export default Like;