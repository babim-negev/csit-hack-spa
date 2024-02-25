"""create user table

Revision ID: dbd416887afd
Revises: 
Create Date: 2024-02-25 12:57:44.074883

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'dbd416887afd'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table('user',
                    sa.Column('id', sa.Integer, primary_key=True),
                    sa.Column('login', sa.String(15)),
                    sa.Column('password', sa.String(50)),
                    sa.Column('full_name', sa.String(30))
                    )
    op.create_table('course',
                    sa.Column('id', sa.Integer, primary_key=True),
                    sa.Column('title', sa.String(42)),
                    sa.Column('password', sa.String(50)),
                    sa.Column('teacher_id', sa.Integer)
                    )
    op.create_foreign_key(
        "fk_course_teacher",
        "course",
        "user",
        ["user_id"],
        ["id"],
    )



def downgrade() -> None:
    op.drop_table('user')
