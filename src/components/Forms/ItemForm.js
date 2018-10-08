import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

class ItemForm extends React.Component {
    state = {
        data: {
            item: " ",
            index: null
        }
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    add = e => {
        e.preventDefault();
        this.props.add(this.state.data.item)
    };

    remove = e => {
        e.preventDefault();
        this.props.remove(this.state.data.index)
    };

    render() {
        const { data, } = this.state;
        return (
            <>
                <h1>Add Items</h1>
                <Form onSubmit={this.add}>
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
                <h1>Remove Items</h1>
                <Form onSubmit={this.remove}>
                    <Form.Field>
                        <label htmlFor="index"></label>
                        <input
                            type="text"
                            id="index"
                            name="index"
                            placeholder="Write your item index to remove it !"
                            value={data.index}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Button primary>Remove Item</Button>
                </Form>
            </>
        );
    }
};
ItemForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default ItemForm;