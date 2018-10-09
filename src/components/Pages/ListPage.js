import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { addItem, removeItem } from '../../actions/listActions';
import { connect } from '../../react-redux';
import ItemForm from '../Forms/ItemForm';
import Table from '../Tables/Table';
import './listPage.css';


class ListPage extends React.Component {

    render() {
        return (
            <Container>
                <Grid id="list" columns={3} divided stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <ItemForm add={this.props.add} remove={this.props.remove} />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Table items={this.props.items} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <h2 id="projectDesc">This is a simple project that i used in it my own implementation of Redux & React-Redux modules</h2>
            </Container >
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