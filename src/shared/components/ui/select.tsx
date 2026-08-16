import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from 'react'
import {
	Root as SelectRoot,
	Group as SelectGroupPrimitive,
	Value as SelectValuePrimitive,
	Trigger as SelectTriggerPrimitive,
	Icon as SelectIconPrimitive,
	ScrollUpButton as SelectScrollUpButtonPrimitive,
	ScrollDownButton as SelectScrollDownButtonPrimitive,
	Portal as SelectPortalPrimitive,
	Content as SelectContentPrimitive,
	Viewport as SelectViewportPrimitive,
	Label as SelectLabelPrimitive,
	Item as SelectItemPrimitive,
	ItemIndicator as SelectItemIndicatorPrimitive,
	ItemText as SelectItemTextPrimitive,
	Separator as SelectSeparatorPrimitive,
} from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

const Select = SelectRoot

const SelectGroup = SelectGroupPrimitive

const SelectValue = SelectValuePrimitive

const SelectTrigger = forwardRef<
	ElementRef<typeof SelectTriggerPrimitive>,
	ComponentPropsWithoutRef<typeof SelectTriggerPrimitive>
>(({ className, children, ...props }, ref) => (
	<SelectTriggerPrimitive
		ref={ref}
		className={cn(
			'border-input ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
			className
		)}
		{...props}
	>
		{children}
		<SelectIconPrimitive asChild>
			<ChevronDown className="h-4 w-4 opacity-50" />
		</SelectIconPrimitive>
	</SelectTriggerPrimitive>
))
SelectTrigger.displayName = SelectTriggerPrimitive.displayName

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof SelectScrollUpButtonPrimitive>,
	ComponentPropsWithoutRef<typeof SelectScrollUpButtonPrimitive>
>(({ className, ...props }, ref) => (
	<SelectScrollUpButtonPrimitive
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className
		)}
		{...props}
	>
		<ChevronUp className="h-4 w-4" />
	</SelectScrollUpButtonPrimitive>
))
SelectScrollUpButton.displayName = SelectScrollUpButtonPrimitive.displayName

const SelectScrollDownButton = forwardRef<
	ElementRef<typeof SelectScrollDownButtonPrimitive>,
	ComponentPropsWithoutRef<typeof SelectScrollDownButtonPrimitive>
>(({ className, ...props }, ref) => (
	<SelectScrollDownButtonPrimitive
		ref={ref}
		className={cn(
			'flex cursor-default items-center justify-center py-1',
			className
		)}
		{...props}
	>
		<ChevronDown className="h-4 w-4" />
	</SelectScrollDownButtonPrimitive>
))
SelectScrollDownButton.displayName = SelectScrollDownButtonPrimitive.displayName

const SelectContent = forwardRef<
	ElementRef<typeof SelectContentPrimitive>,
	ComponentPropsWithoutRef<typeof SelectContentPrimitive>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPortalPrimitive>
		<SelectContentPrimitive
			ref={ref}
			className={cn(
				'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				className
			)}
			position={position}
			{...props}
		>
			<SelectScrollUpButton />
			<SelectViewportPrimitive
				className={cn(
					'p-1',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
				)}
			>
				{children}
			</SelectViewportPrimitive>
			<SelectScrollDownButton />
		</SelectContentPrimitive>
	</SelectPortalPrimitive>
))
SelectContent.displayName = SelectContentPrimitive.displayName

const SelectLabel = forwardRef<
	ElementRef<typeof SelectLabelPrimitive>,
	ComponentPropsWithoutRef<typeof SelectLabelPrimitive>
>(({ className, ...props }, ref) => (
	<SelectLabelPrimitive
		ref={ref}
		className={cn('px-2 py-1.5 text-sm font-semibold', className)}
		{...props}
	/>
))
SelectLabel.displayName = SelectLabelPrimitive.displayName

const SelectItem = forwardRef<
	ElementRef<typeof SelectItemPrimitive>,
	ComponentPropsWithoutRef<typeof SelectItemPrimitive>
>(({ className, children, ...props }, ref) => (
	<SelectItemPrimitive
		ref={ref}
		className={cn(
			'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectItemIndicatorPrimitive>
				<Check className="h-4 w-4" />
			</SelectItemIndicatorPrimitive>
		</span>
		<SelectItemTextPrimitive>{children}</SelectItemTextPrimitive>
	</SelectItemPrimitive>
))
SelectItem.displayName = SelectItemPrimitive.displayName

const SelectSeparator = forwardRef<
	ElementRef<typeof SelectSeparatorPrimitive>,
	ComponentPropsWithoutRef<typeof SelectSeparatorPrimitive>
>(({ className, ...props }, ref) => (
	<SelectSeparatorPrimitive
		ref={ref}
		className={cn('bg-muted -mx-1 my-1 h-px', className)}
		{...props}
	/>
))
SelectSeparator.displayName = SelectSeparatorPrimitive.displayName

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
}
