## HOTEL INVENTORY ANGULAR APP
https://youtu.be/3qBXWUpoPHo?t=14501


1. Check to see if Angular CLI is available
 - **ng version** To see if there is Angular is available
 - If not available 
   - *npm i -g @angular/cli*

2. Create a new angular project
 - *ng new {project-name}* e.g hotelinventoryapp
 - You can also setaflag to change the default prefix in component html tag
   -- *ng new {project-name} -- prefix {prefix-name e.g kcb}*
   -- the prefix can be company name or as defined by the developers on the project
 - enable angular routing? Yes
 - stylesheet format -scss *you can choose any*

3. cd into {project-name} and start

4. To run app
 - *ng serve {can add flags}* 
 - on startup go to http://localhost:4200/

5. To build a component
 - *ng generate component {component name}*
  -- can be shortenet to *ng g i {component name}*
 - the created component must be added to root component html or a component html defined in root component
  -- the tag is defined in component.ts property selector: {tag-name}
  -- added in html as \<tagname\\>

