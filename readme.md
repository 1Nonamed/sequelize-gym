# Sequelize Commands

## Creating a table

In order to create a table using Sequelize, you can run:

### - Creating Clients table

`sequelize-cli model:generate --name Clients --attributes name:string,email:string,active:boolean `

### - Creating Memberships table

`sequelize-cli model:generate --name Memberships --attributes name:string,price:integer,duration:integer `

### - Creating Intructors table

`sequelize-cli model:generate --name Instructors --attributes name:string,email:string`

### - Creating Schedules table

`sequelize-cli model:generate --name Schedules --attributes startSchedule:date,endSchedule:date`

### - Creating Payments table

`sequelize-cli model:generate --name Payments --attributes amount:integer,date:date,clientId:integer,membershipId:integer`

### - Creating Classes table

`sequelize-cli model:generate --name Classes --attributes name:string, instructorId:integer`

### - Creating Clients_Classes table

`sequelize-cli model:generate --name Clients_Classes --attributes clientId:integer,classId:integer`

### - Creating Classes_Schedules table

`sequelize-cli model:generate --name Classes_Schedule --attributes classId:integer, scheduleId:integer,day:date`

## Creating migrations

### - Migrate all tables

In order to create a migration for all tables using Sequelize, you can run:

`sequelize-cli db:migrate`

### - Migrate a table

In order to create a migration for a specific table using Sequelize, you can run:

`npx sequelize-cli db:migrate --to migration-name.js`

### - Undo a migration

This command will delete a specific table from the database:

`sequelize-cli db:migrate:undo`

### - Undo all migrations

This command will delete all tables from the database:

`sequelize-cli db:migrate:undo:all`
