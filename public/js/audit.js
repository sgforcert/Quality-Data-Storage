const auditformHandler = async (event) => {
    event.preventDefault();

    const machine_id = document.querySelector('#machine_name').value.trim();
    const sample_id = document.querySelector('#sample_name').value.trim();
    const sample_date = document.querySelector('#sample_day').value.trim();
    const sample_notes = document.querySelector('#Sample-notes').value.trim();
    const operator_id = document.querySelector('#operator_name').value.trim();
    const sample_result = document.querySelector('#Sample-result').value.trim();

    console.log(machine_id, sample_id, sample_date, sample_notes, operator_id, sample_result);

    const response = await fetch("/api/audit", {
        method: "post",
        body: JSON.stringify({
            machine_id, sample_id, sample_date, sample_notes, operator_id, sample_result
        }),
        headers: { 'Content-Type': 'application/json' },

    })
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to post data');
    }
}


document
    .querySelector('#audit-form')
    .addEventListener('submit', auditformHandler);
