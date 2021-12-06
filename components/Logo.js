import Image from 'next/image'
import glorifiedTodo from '../public/glorified_todo.png'

const Logo = () => {
    return (
        <Image
            src={glorifiedTodo}
            alt="Glorified todo"
            width={150}
            height={75}
        />
    )
}

export default Logo;