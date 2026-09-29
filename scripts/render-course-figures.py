from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

output = Path(__file__).resolve().parents[1] / 'public/lectures/foundations'
output.mkdir(parents=True, exist_ok=True)
plt.rcParams.update({'font.size': 18, 'text.color': '#203a34', 'axes.labelcolor': '#203a34'})

fig, ax = plt.subplots(figsize=(12, 6.4), dpi=100)
t = np.linspace(0, 4, 201)
v = 6 - 2*t
ax.plot(t, v, color='#255d88', linewidth=3)
ax.fill_between(t, v, 0, where=v >= 0, color='#d9ebe4')
ax.fill_between(t, v, 0, where=v <= 0, color='#f5d9ce')
ax.axhline(0, color='#596b64', linewidth=1)
ax.set(xlabel='Time (s)', ylabel='Velocity (m/s)', xlim=(0, 4.2), ylim=(-3, 7))
ax.set_xticks([0, 1, 2, 3, 4])
ax.set_yticks([-2, 0, 2, 4, 6])
ax.text(0.65, 1.2, '+9 m', fontsize=25, color='#126951')
ax.text(3.35, -1.9, '-1 m', fontsize=23, color='#9b3d28')
ax.spines[['top', 'right']].set_visible(False)
fig.tight_layout(pad=2)
fig.savefig(output / 'straight-line-motion.png')
plt.close(fig)

fig, ax = plt.subplots(figsize=(12, 6.4), dpi=100)
ax.set(xlim=(0, 10), ylim=(0, 6))
ax.axis('off')
for y, title, value, color in [(5, 'MASS', '4.4 g CO2', '#255d88'), (3, 'AMOUNT', '0.100 mol CO2', '#126951'), (1, 'MOLECULES', r'$6.022\times10^{22}$', '#9b3d28')]:
    ax.text(1, y, title, fontsize=17, color=color, va='center')
    ax.text(5.6, y, value, fontsize=28, color=color, ha='center', va='center')
for y, label in [(4.3, 'divide by 44 g/mol'), (2.3, 'multiply by Avogadro constant')]:
    ax.annotate('', xy=(5.6, y - .65), xytext=(5.6, y + .25), arrowprops={'arrowstyle': '->', 'color': '#596b64', 'lw': 2})
    ax.text(6.1, y - .2, label, fontsize=15, va='center')
fig.tight_layout(pad=1)
fig.savefig(output / 'mole-concept.png')
plt.close(fig)

fig, ax = plt.subplots(figsize=(12, 6.4), dpi=100)
ax.set(xlim=(0, 10), ylim=(-.5, 5.5))
ax.axis('off')
ax.text(2, 5, 'Inputs', ha='center', fontsize=22)
ax.text(8, 5, 'Outputs', ha='center', fontsize=22)
ax.text(5, 5, r'$f(x)=x^2$', ha='center', fontsize=24, color='#255d88')
outputs = {4: 4, 1: 2.5, 0: 1}
for x, y in zip([-2, -1, 0, 1, 2], [4, 3.2, 2.4, 1.6, .8]):
    ax.text(2, y, str(x), ha='center', va='center', fontsize=23)
    ax.annotate('', xy=(7.6, outputs[x*x]), xytext=(2.4, y), arrowprops={'arrowstyle': '->', 'color': '#255d88', 'lw': 2})
for value, y in outputs.items():
    ax.text(8, y, str(value), ha='center', va='center', fontsize=23, color='#9b3d28')
fig.tight_layout(pad=1)
fig.savefig(output / 'sets-and-functions.png')
plt.close(fig)
print('Rendered three 1200 x 640 teaching figures.')
