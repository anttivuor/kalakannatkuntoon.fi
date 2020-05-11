import './styles.css'

import axios from 'axios'
import React, { Component } from 'react'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            feedback: []
        }

        this.URL = 'https://cranky-mirzakhani-cbd420.netlify.app/.netlify/functions/index/api/feedback'
    }

    componentDidMount = () => {
        axios.get(this.URL)
        .then(res => res.data)
        .then(feedback => {
            console.log(feedback)
            this.setState({ feedback, loading: false })
        })
        .catch(error => {
            console.error(error)
            alert(`ERROR: ${error.message || JSON.stringify(error)}`)
        })
    }

    render() {
        const { loading, feedback } = this.state

        return (
            <div className={'admin'}>
                <h1>Welcome to admin panel</h1>
                <p>Here you can see the messages sent from our homepage</p>
                <div className={'admin-feedbacks'}>
                    { loading && 'Loading...' }
                    { (!loading && feedback.length > 0) &&
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    feedback.map(f => (
                                        <tr key={`feedback_item_${f.id}`}>
                                            <td>{(`${f.fname} ${f.sname}`).trim()}</td>
                                            <td>{f.fback.trim()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                    { (!loading && feedback.length === 0) && 'No feedbacks found' }
                </div>
                <a href={'/'}>Back to homepage</a>
            </div>
        )
    }
}

export default Admin