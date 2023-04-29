import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
    form: FormGroup;

    private buildForm() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(10)]],
            email: [''],
            phone: ['', Validators.required],
            color: ['#000000'],
            date: [''],
            age: [12],
            category: ['category-2'],
            tag: [''],
            agree: [false],
            gender: [''],
            zone: [''],
        });
    }

    constructor(private formBuilder: FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {
        this.nameField.valueChanges.subscribe((value) => {
            // escuchar cambios de forma reactiva por Control
            console.log(value);
        });
        this.form.valueChanges.subscribe((value) => {
            // escuchar cambios de forma reactiva para un formulario completo
            console.log(value);
        });
    }

    get isNameFieldValid() {
        return this.nameField.touched && this.nameField.valid;
    }

    get isNameFieldInvalid() {
        return this.nameField.touched && this.nameField.invalid;
    }

    get nameField() {
        return this.form.get('name');
    }

    get emailField() {
        return this.form.get('email');
    }

    get phoneField() {
        return this.form.get('phone');
    }

    get colorField() {
        return this.form.get('color');
    }

    get dateField() {
        return this.form.get('date');
    }

    get ageField() {
        return this.form.get('age');
    }

    get categoryField() {
        return this.form.get('category');
    }

    get tagField() {
        return this.form.get('tag');
    }

    get agreeField() {
        return this.form.get('agree');
    }

    get genderField() {
        return this.form.get('gender');
    }

    get zoneField() {
        return this.form.get('zone');
    }

    getNameValue() {
        console.log(this.nameField.value);
    }

    save(event): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        console.log(this.form.value);
    }
}
