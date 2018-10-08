import React from 'react';
import { Grid } from 'semantic-ui-react';
import { addItem, removeItem } from '../../actions/listActions';
import { connect } from '../../react-redux';
import ItemForm from '../Forms/ItemForm';
import Table from '../Tables/Table';


class ListPage extends React.Component {

    render() {
        return (
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <ItemForm add={this.props.add} remove={this.props.remove} />
                    </Grid.Column>
                    <Grid.Column>
                        <Table items={this.props.items} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return ({
        items: state.items
    })
};

const mapDispatchToProps = dispatch => ({
    add: (item) => dispatch(addItem(item)),
    remove: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)