class Toy {
    constructor(name, price, age, rating, image){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.image = image;
    }

    getDetails() {
        return `${this.name} ${this.price} ${this.age} ${this.rating}`;
    }

    getToyItem() {
        const sectionOne = document.createElement("section");
        sectionOne.classList.add("styling");

        const img = document.createElement("img");
        sectionOne.append(img);
        img.src = this.image;

        const information = document.createElement("section");
        const h3 = document.createElement("h3");
        const price = document.createElement("p");
        const age = document.createElement("p");
        const rating = document.createElement("p");
        h3.innerHTML = this.name;
        price.innerHTML = this.price;
        age.innerHTML = this.age;
        rating.innerHTML = this.rating;
        information.append(h3);
        information.append(price);
        information.append(age);
        information.append(rating);
        information.classList.add("hidden");
        information.classList.add("location");
        
        sectionOne.append(information);

        sectionOne.onmouseover = () => {
            img.classList.add("changeOpacity");
            information.classList.remove("hidden");
        }

        sectionOne.onmouseout = () => {
           img.classList.remove("changeOpacity");
           information.classList.add("hidden");
        }

        return sectionOne;
    }
}

const showToys = () => {
    
    const toys = [];
    toys.push(new Toy("Football", "Price: $19.99", "Age Range: 7+", "Rating: 5 stars", "images/img1.png"));
    toys.push(new Toy("Basketball", "Price: $20.99", "Age Range: 8+", "Rating: 4 stars", "images/img2.png"));
    toys.push(new Toy("Baseball", "Price: $2.99", "Age Range: 7+", "Rating: 4 stars", "images/img3.png"));
    toys.push(new Toy("Soccer Ball", "Price: $9.99", "Age Range: 6+", "Rating: 3.5 stars", "images/img4.png"));
    toys.push(new Toy("Nerf Gun", "Price: $15.99", "Age Range: 10+", "Rating: 4.5 stars", "images/img5.png"));
    toys.push(new Toy("Beyblade Set", "Price: $23.99", "Age Range: 6+", "Rating: 4 stars", "images/img6.png"));
    toys.push(new Toy("Crayons", "Price: $5.99", "Age Range: 5+", "Rating: 5 stars", "images/img7.png"));
    toys.push(new Toy("Toy Truck", "Price: $11.99", "Age Range: 5+", "Rating: 4.5 stars", "images/img8.png"));
    toys.push(new Toy("Dinosaur", "Price: $9.99", "Age Range: 5+", "Rating: 4.5 stars", "images/img9.png"));
    toys.push(new Toy("Fidget Spinner", "Price: $9.99", "Age Range: 6+", "Rating: 3.5 stars", "images/img10.png"));

    const mainSection = document.getElementById("main");
    toys.forEach(toy => {
        mainSection.append(toy.getToyItem());
    });
}

window.onload = () => {
    showToys();
}