<img src="./src/icon.svg" width="100" /><br>
# FSM <br>
A Finite State Machine (FSM) Behavior, Used to control the flow of logic for objects <br>
<br>
Author: piranha305 <br>
Website: https://piranha305.itch.io/ <br>
Download Latest Version : [Version: 1.0.0.0](https://github.com/armandoalonso/fsm/releases/latest) <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js
## Examples Files
- [piranha305_fsm_examples](./examples/piranha305_fsm_examples.c3p)
</br>
<img src="./examples/piranha305_fsm_examples.gif" width="200" />
## Properties
| Property Name | Description
| --- | --- |
| [Enabled](#enabled) | Enable or disable the FSM |
| [Initial State](#initial-state) | The initial state of the FSM |
---
### Enabled
**Description:** Enable or disable the FSM </br>
**Type:** check
### Initial State
**Description:** The initial state of the FSM </br>
**Type:** text
## Actions
| Action | Description |
| --- | --- |
| [Go to state](#go-to-state) | Go to a state |
| [Enable](#enable) | Enable or disable the FSM |
---
### Go to state
**Description:** Go to a state </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| State | string | The state to go to |
### Enable
**Description:** Enable or disable the FSM </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| Enabled | boolean | Enable or disable the FSM |
## Conditions
| Condition | Description |
| --- | --- |
| [On any state change](#on-any-state-change) | Triggered when any state changes |
| [On state enter](#on-state-enter) | Triggered when a state is entered |
| [On state exit](#on-state-exit) | Triggered when a state is exited |
| [On state transition](#on-state-transition) | Triggered when a specific state transition occurs |
| [Current state is](#current-state-is) | Check if the current state is a specific state |
| [Previous state is](#previous-state-is) | Check if the previous state is a specific state |
| [Is enabled](#is-enabled) | Check if the FSM is enabled |
---
### On any state change
**Description:** Triggered when any state changes </br>
**Is Trigger:** true </br>
### On state enter
**Description:** Triggered when a state is entered </br>
**Is Trigger:** true </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| State | string | The state that was just entered |
### On state exit
**Description:** Triggered when a state is exited </br>
**Is Trigger:** true </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| State | string | The state that was just exited |
### On state transition
**Description:** Triggered when a specific state transition occurs </br>
**Is Trigger:** true </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| From | string | The state that was just exited |
| To | string | The state that was just entered |
### Current state is
**Description:** Check if the current state is a specific state </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| State | string | The state to check |
### Previous state is
**Description:** Check if the previous state is a specific state </br>
#### Parameters:
| Name | Type | Description |
| --- | --- | --- |
| State | string | The state to check |
### Is enabled
**Description:** Check if the FSM is enabled </br>

## Expressions
| Expression | Description |
| --- | --- |
| [CurrentState](#currentstate) | The current state |
| [PreviousState](#previousstate) | The previous state |
---
### CurrentState
**Description:** The current state </br>
**Return Type:** string </br>
### PreviousState
**Description:** The previous state </br>
**Return Type:** string </br>