import React from 'react';

const ctxStore = React.createContext();

export const Provider = ({ store, children }) => {
    return (
        <ctxStore.Provider value={store}>
            {children}
        </ctxStore.Provider>
    )
};

export const connect = (mapStateToProps, mapDispatchToProps) => {
    return (WrappedComponent) => {
        class ConnectedComponent extends React.Component {
            unsubscribe = null;
            componentDidMount() {
                this.unsubscribe = this.props.subscribe(() => {
                    this.setState({})
                })
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            render() {
                const props = {
                    ...this.props,
                    ...mapStateToProps(this.props.getState()),
                    ...mapDispatchToProps(this.props.dispatch)
                }
                return <WrappedComponent {...props} />
            }
        }

        return () => (
            <ctxStore.Consumer>
                {store => <ConnectedComponent {...store} />}
            </ctxStore.Consumer>
        )
    }
};