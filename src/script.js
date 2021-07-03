 document.querySelector('.btn').addEventListener('click', function() {
        let name = prompt('What is your name?');
        if (name.length) {
          alert('Thanks 🙏' + name + ' , we will be in touch. Meanwhile, stay healthy...')
        } else {
          alert('No name 🤔 🤔??  sorry.... you have to give your name')
        }
      });