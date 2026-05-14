
export class Orchestrator {
  route(task){
    return {
      task,
      decision: 'cluster_activation'
    };
  }
}
