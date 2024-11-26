function updateTimer() {
    const now = new Date();
    const dueDate = new Date('December 25 2024 23:59:59');
    
    const diff = dueDate - now;
    const days = Math.floor(diff/(1000*60*60*24));
}
setInterval(updateTimer,)