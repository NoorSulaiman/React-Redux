import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class ItemForm extends React.Component {
    state = {
        data: {
            item: "",
            index: ""
        },
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    add = e => {
        e.preventDefault();
        const errors = this.validateItem(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {

            this.props.add(this.state.data.item)
        }
    };

    remove = e => {
        e.preventDefault();
        const errors = this.validateIndex(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.remove(this.state.data.index)
        }
    };

    validateItem = data => {
        const errors = {};
        const { item } = data;
        if (item.length === 0 || !item.trim()) errors.item = "Can't be blank";
        return errors;
    };

    validateIndex = data => {
        const errors = {};
        const { index } = data;
        if (index.length === 0 || !index.trim()) errors.index = "Can't be blank"
        if (isNaN(parseInt(index))) errors.index = "Should be a number from the list"
        return errors;
    };



    render() {
        const { data, errors } = this.state;
        return (
            <>
                <h1>Add Items</h1>
                <Form onSubmit={this.add}>
                    <Form.Field error={!!errors.item}>
                        <label htmlFor="item"></label>
                        <input
                            type="text"
                            id="item"
                            name="item"
                            placeholder="Write your item name here !"
                            value={data.item}
                            onChange={this.onChange}
                        />
                        {errors.item && <InlineError text={errors.item} />}
                    </Form.Field>
                    <Button primary>Add Item</Button>
                </Form>
                <h1>Remove Items</h1>
                <Form onSubmit={this.remove}>
                    <Form.Field error={!!errors.index}>
                        <label htmlFor="index"></label>
                        <input
                            type="text"
                            id="index"
                            name="index"
                            placeholder="Write your item index to remove it !"
                            value={data.index}
                            onChange={this.onChange}
                        />
                        {errors.index && <InlineError text={errors.index} />}
                    </Form.Field>
                    <Button primary>Remove Item</Button>
                </Form>
            </>
        );
    }
};
ItemForm.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ItemForm;