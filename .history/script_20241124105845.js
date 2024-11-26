function updateTimer() {
    const now = new Date();
    const dueDate = new Date();
    dueDate.setHours(23,59,59,999);
    const diff = dueDate - now
}