// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "behavior",
  id: "piranha305_fsm",
  name: "FSM",
  version: "1.0.0.3",
  category:
    // "attributes",
    // "movements",
    // "other",
    "general",
  author: "piranha305",
  website: "https://piranha305.itch.io/",
  documentation: "https://github.com/armandoalonso/fsm/blob/main/README.md",
  description: "A Finite State Machine (FSM) Behavior, Used to control the flow of logic for objects",
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  addonUrl: "https://www.construct.net/en/make-games/addons/1089/fsm", // displayed in auto-generated docs
  githubUrl: "https://github.com/armandoalonso/fsm", // displays latest release version in auto-generated docs
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    Set: {
      IsOnlyOneAllowed: false,
      CanBeBundled: true,
      IsDeprecated: false,
    },
  },
  properties: [
    {
      type: "check",
      id: "enabled",
      name: "Enabled",
      desc: "Enable or disable the FSM",
      options: {
        initialValue: true,
        interpolatable: false,
      }
    },
    {
      type: "text",
      id: "initialState",
      name: "Initial State",
      desc: "The initial state of the FSM (does not trigger OnStateEnter)",
      options: {
        initialValue: "",
        interpolatable: false,
      }
    }
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    general: "General",
  },
  Acts: {
    GoToState: {
      category: "general",
      forward: "_GoToState",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "state",
          name: "State",
          desc: "The state to transition to",
          type: "string",
          value: "",
        },
      ],
      listName: "Go to state",
      displayText: "{my}: Go to state [b]{0}[/b]",
      description: "Transition to a specific state",
    },
    SetEnabled: {
      category: "general",
      forward: "_SetEnabled",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "enabled",
          name: "Enabled",
          desc: "Enable or disable the FSM",
          type: "boolean",
          value: true,
        },
      ],
      listName: "Enable",
      displayText: "{my}: Enable [b]{0}[/b]",
      description: "Enable or disable the FSM",
    }
    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [b] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample action [b]{0}[/b]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
  },
  Cnds: {
    OnStateChange: {
      category: "general",
      forward: "_OnStateChange",
      autoScriptInterface: true,
      highlight: false,
      params: [],
      listName: "On any state change",
      displayText: "{my}: On any state change",
      description: "Triggered when state changes",
      isTrigger: true,
    },
    OnStateEnter: {
      category: "general",
      forward: "_OnStateEnter",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "state",
          name: "State",
          desc: "The state that was just entered",
          type: "string",
          value: "",
        },
      ],
      listName: "On state enter",
      displayText: "{my}: On state enter [b]{0}[/b]",
      description: "Triggered when a specific state is entered",
      isTrigger: true,
    },
    OnStateExit: {
      category: "general",
      forward: "_OnStateExit",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "state",
          name: "State",
          desc: "The state that was just exited",
          type: "string",
          value: "",
        },
      ],
      listName: "On state exit",
      displayText: "{my}: On state exit [b]{0}[/b]",
      description: "Triggered when a specific state is exited",
      isTrigger: true,
    },
    OnStateTransition: {
      category: "general",
      forward: "_OnStateTransition",
      autoScriptInterface: true,
      highlight: false,
      params: [ 
        {
          id: "from",
          name: "From", 
          desc: "The state that was just exited",
          type: "string",
          value: "", 
        },
        {
          id: "to",
          name: "To",
          desc: "The state that was just entered",
          type: "string",
          value: "",
        }
      ],
      listName: "On state transition",
      displayText: "{my}: On state transition [b]{0}[/b] -> [b]{1}[/b]",
      description: "Triggered when a specific state transition occurs",
      isTrigger: true,
    },
    CurrentStateIs: {
      category: "general",
      forward: "_CurrentStateIs",
      autoScriptInterface: true,
      highlight: true,
      params: [
        {
          id: "state",
          name: "State",
          desc: "The state to check",
          type: "string",
          value: "",
        },
      ],
      listName: "Current state is",
      displayText: "{my}: Current state is [b]{0}[/b]",
      description: "Check if the current state is a specific state",
    },
    PreviousStateIs: {
      category: "general",
      forward: "_PreviousStateIs",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "state",
          name: "State",
          desc: "The state to check",
          type: "string",
          value: "",
        },
      ],
      listName: "Previous state is",
      displayText: "{my}: Previous state is [b]{0}[/b]",
      description: "Check if the previous state is a specific state",
    },
    IsEnabled: {
      category: "general",
      forward: "_IsEnabled",
      autoScriptInterface: true,
      highlight: false,
      params: [ ],
      listName: "Is enabled",
      displayText: "{my}: Is enabled",
      description: "Check if the FSM is enabled",
    },
    CurrentStateInList: {
      category: "general",
      forward: "_CurrentStateIn",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "states",
          name: "States",
          desc: "The states to check (comma separated list of states)",
          type: "string",
          value: "",
        },
      ],
      listName: "Current state in list",
      displayText: "{my}: Current state in [b]{0}[/b]",
      description: "Check if the current state is in a list of states, (comma separated list of states)",
    },
    PreviousStateInList: {
      category: "general",
      forward: "_PreviousStateIn",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "states",
          name: "States",
          desc: "The states to check (comma separated list of states)",
          type: "string",
          value: "",
        },
      ],
      listName: "Previous state in list",
      displayText: "{my}: Previous state in [b]{0}[/b]",
      description: "Check if the previous state is in a list of states, (comma separated list of states)",
    },
    OnStateEnterInList: {
      category: "general",
      forward: "_OnStateEnterIn",
      autoScriptInterface: true,
      highlight: false,
      
      params: [
        {
          id: "states",
          name: "States",
          desc: "The states to check (comma separated list of states)",
          type: "string",
          value: "",
        },
      ],
      listName: "On state enter in list",
      displayText: "{my}: On state enter in [b]{0}[/b]",
      description: "Triggered when a specific state is entered from a comma separated list of states",
      isTrigger: true,
    },
    OnStateExitInList: {
      category: "general",
      forward: "_OnStateExitIn",
      autoScriptInterface: true,
      highlight: false,
      params: [
        {
          id: "states",
          name: "States",
          desc: "The states to check (comma separated list of states)",
          type: "string",
          value: "",
        },
      ],
      listName: "On state exit in list",
      displayText: "{my}: On state exit in [b]{0}[/b]",
      description: "Triggered when a specific state is exited from a comma separated list of states",
      isTrigger: true,
    },
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [b] tags.
      // You can also use the {my} tag to include the behavior icon and name.
      displayText: "{my}: Sample condition [b]{0}[/b]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
  },
  Exps: {
    CurrentState: {
      category: "general",
      forward: "_CurrentState",
      autoScriptInterface: true,
      highlight: true,
      returnType: "string",
      params: [ ],
      listName: "Current state",
      displayText: "{my}: Current state",
      description: "The current state",
    },
    PreviousState: {
      category: "general",
      forward: "_PreviousState",
      autoScriptInterface: true,
      highlight: true,
      returnType: "string",
      params: [ ],
      listName: "Previous state",
      displayText: "{my}: Previous state",
      description: "The previous state",
    },

    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
  },
};
