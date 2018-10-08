import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

class ItemForm extends React.Component {
    state = {
        data: {},
        loading: false,
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => {
        e.preventDefault();
        this.setState({ loading: true });
        this.props.submit(this.state.data)
    };

    render() {
        const { data, loading } = this.state;
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                <Form.Field>
                    <label htmlFor="item"></label>
                    <input
                        type="text"
                        id="item"
                        name="item"
                        placeholder="Write your item name here !"
                        value={data.item}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Add Item</Button>
            </Form>
        );
    }
};
ItemForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default ItemForm;