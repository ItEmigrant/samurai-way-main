import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

type stateProfileStatusType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType, stateProfileStatusType> {

    state: stateProfileStatusType = {
        editMode: false

    }

    activateEditeMode = () => {
       debugger
        console.log('this:', this )
        this.setState({
            editMode: true
        })
    }

    deActivateEditeMode = () =>{
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                </div>}

                {this.state.editMode && <div>
                    <input autoFocus onBlur={this.deActivateEditeMode} value={this.props.status}/>
                </div>}

            </div>
        );
    }
}



