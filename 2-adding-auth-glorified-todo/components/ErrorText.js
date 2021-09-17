
const ErrorText = ({ error }) => {
    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>
    } 

    return ''
}

export default ErrorText