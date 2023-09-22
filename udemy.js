function confirmNavigation(event) {
    var confirmed = confirm("Você realmente deseja ir para está página?")
    if (!confirmed) {
        event.preventDefault();
    }
}