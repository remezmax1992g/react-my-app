test ("get only uncompleted tesks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: false},
        {id: 3, title: "Sugar", isDone: true},
        {id: 4, title: "Salt", isDone: false}
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(2);
    expect(uncompletedTasks[1].id).toBe(4);
})