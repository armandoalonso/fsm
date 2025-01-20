import { action, condition, expression } from "../template/aceDefine.js";

const general = "General";

// Go to state
action(
  general,
  "GoToState",
  {
    highlight: true,
    deprecated: false,
    isAsync: false,
    listName: "Go to state",
    displayText: "{my}: Go to state [b]{0}[/b]",
    description: "Transition to a specific state",
    params: [
      {
        id: "state",
        name: "State",
        desc: "The state to transition to",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (state) {
    this.goToState(state);
  }
);

// Set enabled
action(
  general,
  "SetEnabled",
  {
    highlight: false,
    deprecated: false,
    isAsync: false,
    listName: "Set enabled",
    displayText: "{my}: Set enabled to [b]{0}[/b]",
    description: "Enable or disable the FSM",
    params: [
      {
        id: "enabled",
        name: "Enabled",
        desc: "Enable or disable the FSM",
        type: "boolean",
        initialValue: "",
      },
    ],
  },
  function (enabled) {
    this.enabled = enabled;
  }
)

// On any state change
condition(
  general,
  "OnStateChange",
  {
    highlight: false,
    deprecated: false,
    listName: "On any state change",
    displayText: "{my}: On any state change",
    description: "Triggered when state changes",
    isTrigger: true,
    params: [],
  },
  function () {
    return this.enabled;
  }
);

// On state enter
condition(
  general,
  "OnStateEnter",
  {
    highlight: true,
    deprecated: false,
    listName: "On state enter",
    displayText: "{my}: On state enter [b]{0}[/b]",
    description: "Triggered when entering a specific state",
    isTrigger: true,
    params: [
      {
        id: "state",
        name: "State",
        desc: "The state to trigger on",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (state) {
    return this.enabled && this.currentState == state;
  }
);

// On state exit
condition(
  general,
  "OnStateExit",
  {
    highlight: false,
    deprecated: false,
    listName: "On state exit",
    displayText: "{my}: On state exit [b]{0}[/b]",
    description: "Triggered when exiting a specific state",
    isTrigger: true,
    params: [
      {
        id: "state",
        name: "State",
        desc: "The state to trigger on",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (state) {
    return this.enabled && this.previousState == state;
  }
);

// On state transition
condition(
  general,
  "OnStateTransition",
  {
    highlight: false,
    deprecated: false,
    listName: "On state transition",
    displayText: "{my}: On state transition from [b]{0}[/b] to [b]{1}[/b]",
    description: "Triggered when transitioning from one state to another",
    isTrigger: true,
    params: [
      {
        id: "from",
        name: "From",
        desc: "The state to transition from",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
      {
        id: "to",
        name: "To",
        desc: "The state to transition to",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (from, to) {
    return this.enabled && this.previousState == from && this.currentState == to;
  }
);

// Current state is
condition(
  general,
  "CurrentStateIs",
  {
    highlight: false,
    deprecated: false,
    listName: "Current state is",
    displayText: "{my}: Current state is [b]{0}[/b]",
    description: "Check if the current state is a specific state",
    params: [
      {
        id: "state",
        name: "State",
        desc: "The state to check",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (state) {
    return this.enabled && this.currentState == state;
  }
);

//Previous state is
condition(
  general,
  "PreviousStateIs",
  {
    highlight: false,
    deprecated: false,
    listName: "Previous state is",
    displayText: "{my}: Previous state is [b]{0}[/b]",
    description: "Check if the previous state was a specific state",
    params: [
      {
        id: "state",
        name: "State",
        desc: "The state to check",
        type: "string",
        initialValue: "",
        autocompleteId: "piranha305_fsm_states",
      },
    ],
  },
  function (state) {
    return this.enabled && this.previousState == state;
  }
);


//Is enabled
condition(
  general,
  "IsEnabled",
  {
    highlight: false,
    deprecated: false,
    listName: "Is enabled",
    displayText: "{my}: Is enabled",
    description: "Check if the FSM is enabled",
    params: [],
  },
  function () {
    return this.enabled;
  }
);

// Current state in list
condition(
  general,
  "CurrentStateInList",
  {
    highlight: false,
    deprecated: false,
    listName: "Current state in list",
    displayText: "{my}: Current state in list: {0}",
    description: "Check if the current state is in a list of states",
    params: [
      {
        id: "states",
        name: "States",
        desc: "The states to check (comma separated)",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (states) {
    states = states.split(",").map((x) => x.trim());
    return this.enabled && states.includes(this.currentState);
  }
);

// Previous state in list
condition(
  general,
  "PreviousStateInList",
  {
    highlight: false,
    deprecated: false,
    listName: "Previous state in list",
    displayText: "{my}: Previous state in list: {0}",
    description: "Check if the previous state is in a list of states",
    params: [
      {
        id: "states",
        name: "States",
        desc: "The states to check (comma separated)",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (states) {
    states = states.split(",").map((x) => x.trim());
    return this.enabled && states.includes(this.previousState);
  }
);

// On state enter in list
condition(
  general,
  "OnStateEnterInList",
  {
    highlight: false,
    deprecated: false,
    listName: "On state enter in list",
    displayText: "{my}: On state enter in list: {0}",
    description: "Triggered when entering a state in a list of states",
    isTrigger: true,
    params: [
      {
        id: "states",
        name: "States",
        desc: "The states to trigger on (comma separated)",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (states) {
    states = states.split(",").map((x) => x.trim());
    return this.enabled && states.includes(this.currentState);
  }
);

// On state exit in list
condition(
  general,
  "OnStateExitInList",
  {
    highlight: false,
    deprecated: false,
    listName: "On state exit in list",
    displayText: "{my}: On state exit in list: {0}",
    description: "Triggered when exiting a state in a list of states",
    isTrigger: true,
    params: [
      {
        id: "states",
        name: "States",
        desc: "The states to trigger on (comma separated)",
        type: "string",
        initialValue: "",
      },
    ],
  },
  function (states) {
    states = states.split(",").map((x) => x.trim());
    return this.enabled && states.includes(this.previousState);
  }
);

// Current state
expression(
  general,
  "CurrentState",
  {
    highlight: false,
    deprecated: false,
    returnType: "string",
    description: "Get the current state",
    params: [],
  },
  function () {
    return this.currentState;
  }
);

// Previous state
expression(
  general,
  "PreviousState",
  {
    highlight: false,
    deprecated: false,
    returnType: "string",
    description: "Get the previous state",
    params: [],
  },
  function () {
    return this.previousState;
  }
);
