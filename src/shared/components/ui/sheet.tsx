'use client'

import {
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
	type HTMLAttributes,
} from 'react'
import {
	Root as SheetRoot,
	Trigger as SheetTriggerPrimitive,
	Close as SheetClosePrimitive,
	Portal as SheetPortalPrimitive,
	Overlay as SheetOverlayPrimitive,
	Content as SheetContentPrimitive,
	Title as SheetTitlePrimitive,
	Description as SheetDescriptionPrimitive,
} from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

const Sheet = SheetRoot

const SheetTrigger = SheetTriggerPrimitive

const SheetClose = SheetClosePrimitive

const SheetPortal = SheetPortalPrimitive

const SheetOverlay = forwardRef<
	ElementRef<typeof SheetOverlayPrimitive>,
	ComponentPropsWithoutRef<typeof SheetOverlayPrimitive>
>(({ className, ...props }, ref) => (
	<SheetOverlayPrimitive
		className={cn(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
			className
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetOverlayPrimitive.displayName

const sheetVariants = cva(
	'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
				right: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	}
)

interface SheetContentProps
	extends
		ComponentPropsWithoutRef<typeof SheetContentPrimitive>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<
	ElementRef<typeof SheetContentPrimitive>,
	SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetContentPrimitive
			ref={ref}
			className={cn(sheetVariants({ side }), className)}
			{...props}
		>
			<SheetClosePrimitive className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
				<X className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</SheetClosePrimitive>
			{children}
		</SheetContentPrimitive>
	</SheetPortal>
))
SheetContent.displayName = SheetContentPrimitive.displayName

const SheetHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-2 text-center sm:text-left',
			className
		)}
		{...props}
	/>
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...props}
	/>
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef<
	ElementRef<typeof SheetTitlePrimitive>,
	ComponentPropsWithoutRef<typeof SheetTitlePrimitive>
>(({ className, ...props }, ref) => (
	<SheetTitlePrimitive
		ref={ref}
		className={cn('text-foreground text-lg font-semibold', className)}
		{...props}
	/>
))
SheetTitle.displayName = SheetTitlePrimitive.displayName

const SheetDescription = forwardRef<
	ElementRef<typeof SheetDescriptionPrimitive>,
	ComponentPropsWithoutRef<typeof SheetDescriptionPrimitive>
>(({ className, ...props }, ref) => (
	<SheetDescriptionPrimitive
		ref={ref}
		className={cn('text-muted-foreground text-sm', className)}
		{...props}
	/>
))
SheetDescription.displayName = SheetDescriptionPrimitive.displayName

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
}
