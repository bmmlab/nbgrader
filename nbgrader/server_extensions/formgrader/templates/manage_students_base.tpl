{%- extends 'base.tpl' -%}

{%- block title -%}
Manage Students
{%- endblock -%}

{%- block sidebar -%}
{%- if is_coordinator -%}
<li role="presentation"><a href="{{ base_url }}/formgrader/manage_assignments">Manage Assignments</a></li>
{%- endif -%}
<li role="presentation"><a href="{{ base_url }}/formgrader/gradebook">Manual Grading</a></li>
<li role="presentation" class="active"><a href="{{ base_url }}/formgrader/manage_students">Manage Students</a></li>
{%- endblock -%}
