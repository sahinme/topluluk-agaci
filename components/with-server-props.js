import PropTypes from 'prop-types'

export default WrappedComponent => {
    class WithServerProps extends React.Component {
        static async getInitialProps({ pathname }) {
            return { pathname }
        }
        getChildContext() {
            return { pathname: this.props.pathname }
        }
        render() {
            return <WrappedComponent />
        }
    }
    WithServerProps.childContextTypes = {
        pathname: PropTypes.string.isRequired
    }

    return WithServerProps
}