function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

      this.previousState = "";
      this.currentState = "";
      this.initialState = "";
      this.enabled = false;

      if (properties) {
        this.enabled = properties[0];
        this.initialState = properties[1];
      }

      //check if initial state is empty string, if so set to default
      if(this.initialState == ""){
        this.initialState = "default";
      }

      this._TriggerInitialOnStateEnter();
    }

    _TriggerInitialOnStateEnter() {
      setTimeout(() => {
        this.previousState = "";
        this.currentState = this.initialState;
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateChange);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateEnter);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateEnterInList);
      }, 0.0001);
    }

    _GoToState(state) {
      if(this.enabled && this.currentState != state){
        this.previousState = this.currentState;
        this.currentState = state;
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateChange);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateExit);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateExitInList);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateEnter);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateEnterInList);
        this.Trigger(C3.Behaviors.piranha305_fsm.Cnds.OnStateTransition);
      }
    }

    _OnStateChange() {
      return this.enabled;
    }

    _OnStateEnter(state) {
      return this.enabled && this.currentState == state;
    }

    _OnStateExit(state) {
      return this.enabled && this.previousState == state;
    }

    _OnStateTransition(from, to){
      return this.enabled && this.previousState == from && this.currentState == to;
    }

    _CurrentStateIs(state) {
      return this.enabled && this.currentState == state;
    }

    _PreviousStateIs(state) {
      return this.enabled && this.previousState == state;
    }

    _CurrentStateIn(states) {
      states = states.split(",").map((x) => x.trim());
      return this.enabled && states.includes(this.currentState);
    }

    _PreviousStateIn(states) {
      states = states.split(",").map((x) => x.trim());
      return this.enabled && states.includes(this.previousState);
    }

    _OnStateEnterIn(states) {
      states = states.split(",").map((x) => x.trim());
      return this.enabled && states.includes(this.currentState);
    }

    _OnStateExitIn(states) {
      states = states.split(",").map((x) => x.trim());
      return this.enabled && states.includes(this.previousState);
    }

    _IsEnabled() {
      return this.enabled;
    }

    _SetEnabled(enabled) {
      this.enabled = enabled;
    }

    _CurrentState(){
      return this.currentState;
    }

    _PreviousState(){
      return this.previousState;
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {
        enabled: this.enabled,
        initialState: this.initialState,
        currentState: this.currentState,
        previousState: this.previousState
      };
    }

    LoadFromJson(o) {
      this.enabled = o.enabled;
      this.initialState = o.initialState;
      this.currentState = o.currentState;
      this.previousState = o.previousState;
    }

    GetDebuggerProperties() { 
      return [
        {
          title: "FSM",
          properties: [
            {
              name: "$current-state",
              value: this.currentState
            },
            {
              name: "$previous-state",
              value: this.previousState
            },
            {
              name: "$enabled",
              value: this.enabled
            }
          ]
        }
      ];
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }
  };
}
