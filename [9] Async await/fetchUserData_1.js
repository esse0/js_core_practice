async function fetchUserData(userId){
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
        throw new Error('Ошибка при загрузке данных пользователя');
    }

    const userData = await response.json();
    return userData;
}