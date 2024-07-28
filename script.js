class Password{
    constructor(length){
        this.length = length;
        this.uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
        this.digits = '0123456789';
        this.specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    }

    generate(){
        if(this.length < 4){
            throw new error('Password length must be at least 4 characters to include all required character types');
        }
        let password = [
            this.uppercase[Math.floor(Math.random()*this.uppercase.length)],
            this.lowercase[Math.floor(Math.random()*this.lowercase.length)],
            this.digits[Math.floor(Math.random()*this.digits.length)],
            this.specialChars[Math.floor(Math.random()*this.specialChars.length)]
        ]

        let allChars = this.uppercase + this.lowercase + this.digits + this.specialChars;

        for(let i=4; i<this.length; i++){
            password.push(allChars[Math.floor(Math.random()*allChars.length)]);
        }

        password = password.sort(()=> Math.random() - 0.5);
        return password.join('');
    }
}

let btn = document.getElementById('btn');

btn.addEventListener('click',(event)=>{
    let len = document.getElementById('len').value;
    event.preventDefault();
    const x = new Password(len);
    const result = x.generate();

    let span = document.querySelector('span')
    span.innerHTML = result;

    document.querySelector('form').reset();
})

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', (e)=>{
    e.preventDefault();
    let span = document.querySelector('span').textContent;
    navigator.clipboard.writeText(span).then(()=>{
        alert("Copied the text: " + span);
    })
    .catch(err=>{
        console.error("Failed to copy text: ", err);
    });
})