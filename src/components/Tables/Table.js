import React from 'react'
import { Table } from 'semantic-ui-react'

const ItemsTable = ({ items }) => (

    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Index</Table.HeaderCell>
                <Table.HeaderCell>Items</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {items.map((item, i) => {
                return (
                    <Table.Row key={i}>
                        <Table.Cell>{i + 1}</Table.Cell>
                        <Table.Cell>{item}</Table.Cell>
                    </Table.Row>
                )
            })
            }


        </Table.Body>
    </Table>
)

export default ItemsTable