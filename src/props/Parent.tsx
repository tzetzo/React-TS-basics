import { Child } from './Child';

const Parent = () => {
    return <Child color='red' onClick={() => console.log('clicked')}>tzetzo</Child>
}

export default Parent;