import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type stateProfileStatusType = {
    editMode: boolean
    Status: string
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType, stateProfileStatusType> {


    state: stateProfileStatusType = {
        editMode: false,
        Status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditeMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.Status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
               this.setState({
                  Status: event.currentTarget.value
               })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<stateProfileStatusType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                Status: this.props.status
            })

        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'No status!!!' }</span>
                </div>}

                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivateEditeMode}
                           value={this.state.Status}/>
                </div>}

            </div>
        );
    }
}



