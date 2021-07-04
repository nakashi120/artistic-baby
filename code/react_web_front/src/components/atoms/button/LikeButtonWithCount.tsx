import {
  Box,
  chakra,
  HTMLChakraProps,
  Icon,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { HTMLMotionProps, motion, useAnimation } from "framer-motion"
import type { VFC } from "react"
import { useState, memo } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export type LikeButtonWithCountProps = {
  count: number
  isLiked: boolean
}

export const LikeButtonWithCount: VFC<LikeButtonWithCountProps> = memo(
  (props: LikeButtonWithCountProps) => {
    const [isLike, setIsLike] = useState(false)
    const controls = useAnimation()

    const toggleLike = async () => {
      await setIsLike(!isLike)
      controls.start({
        scale: [0.9, 1.1, 1.2, 1.2, 1],
        color: ["#FFF5F5", "#FED7D7", "#FEB2B2", "#FC8181", "#F56565"],
      })
    }

    type Merge<P, T> = Omit<P, keyof T> & T
    type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>

    const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

    return (
      <Box display="flex" alignItems="center" color="gray.500">
        <Tooltip label="いいね！" bg="gray.400" fontSize="11px">
          <MotionBox
            cursor="pointer"
            onClick={toggleLike}
            animate={controls}
            transition={{ duration: 2 }}
          >
            <Icon
              as={isLike ? AiFillHeart : AiOutlineHeart}
              mr="2.5"
              fontSize="22px"
              color={isLike ? "red.400" : ""}
            />
          </MotionBox>
        </Tooltip>
        <Text>{props.count}</Text>
      </Box>
    )
  }
)
